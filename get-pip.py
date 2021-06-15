import ctypes
import time

#import win32api, win32con #pip install pywin32==223 or 225

SendInput = ctypes.windll.user32.SendInput

## MOUSE SCANCODES ##
MOUSE_LEFTDOWN = 0x0002     # left button down 
MOUSE_LEFTUP = 0x0004       # left button up 
MOUSE_RIGHTDOWN = 0x0008    # right button down 
MOUSE_RIGHTUP = 0x0010      # right button up 
MOUSE_MIDDLEDOWN = 0x0020   # middle button down 
MOUSE_MIDDLEUP = 0x0040


# C struct redefinitions 
PUL = ctypes.POINTER(ctypes.c_ulong)
class KeyBdInput(ctypes.Structure):
    _fields_ = [("wVk", ctypes.c_ushort),
                ("wScan", ctypes.c_ushort),
                ("dwFlags", ctypes.c_ulong),
                ("time", ctypes.c_ulong),
                ("dwExtraInfo", PUL)]

class HardwareInput(ctypes.Structure):
    _fields_ = [("uMsg", ctypes.c_ulong),
                ("wParamL", ctypes.c_short),
                ("wParamH", ctypes.c_ushort)]

class MouseInput(ctypes.Structure):
    _fields_ = [("dx", ctypes.c_long),
                ("dy", ctypes.c_long),
                ("mouseData", ctypes.c_ulong),
                ("dwFlags", ctypes.c_ulong),
                ("time",ctypes.c_ulong),
                ("dwExtraInfo", PUL)]

class Input_I(ctypes.Union):
    _fields_ = [("ki", KeyBdInput),
                 ("mi", MouseInput),
                 ("hi", HardwareInput)]

class Input(ctypes.Structure):
    _fields_ = [("type", ctypes.c_ulong),
                ("ii", Input_I)]

# Actuals Functions
def PressKey(hexKeyCode):
    extra = ctypes.c_ulong(0)
    ii_ = Input_I()
    ii_.ki = KeyBdInput( 0, hexKeyCode, 0x0008, 0, ctypes.pointer(extra) )
    x = Input( ctypes.c_ulong(1), ii_ )
    ctypes.windll.user32.SendInput(1, ctypes.pointer(x), ctypes.sizeof(x))

def ReleaseKey(hexKeyCode):
    extra = ctypes.c_ulong(0)
    ii_ = Input_I()
    ii_.ki = KeyBdInput( 0, hexKeyCode, 0x0008 | 0x0002, 0, ctypes.pointer(extra) )
    x = Input( ctypes.c_ulong(1), ii_ )
    ctypes.windll.user32.SendInput(1, ctypes.pointer(x), ctypes.sizeof(x))

## MOUSE FUNCTIONS ##
def MouseMoveRelative(x,y):
    extra = ctypes.c_ulong(0)
    ii_ = Input_I()
    ii_.mi = MouseInput(x, y, 0, 0x0001, 0, ctypes.pointer(extra))

    command = Input(ctypes.c_ulong(0), ii_)
    ctypes.windll.user32.SendInput(1, ctypes.pointer(command), ctypes.sizeof(command))

def MouseMoveAbsolute(x,y):
    ctypes.windll.user32.SetCursorPos(x,y)

def left_click_pos(x,y):
    ctypes.windll.user32.SetCursorPos(x,y)
    ctypes.windll.user32.mouse_event(2,0,0,0,0)
    ctypes.windll.user32.mouse_event(4,0,0,0,0)

def right_click():
    ctypes.windll.user32.mouse_event(MOUSE_RIGHTDOWN,0,0,0,0)
def right_release():
    ctypes.windll.user32.mouse_event(MOUSE_RIGHTUP,0,0,0,0)
def left_click():
    ctypes.windll.user32.mouse_event(MOUSE_LEFTDOWN,0,0,0,0)
def left_release():
    ctypes.windll.user32.mouse_event(MOUSE_LEFTUP,0,0,0,0)


## SCAN CODES ##
#https://wiki.nexusmods.com/index.php/DirectX_Scancodes_And_How_To_Use_Them
#https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-6.0/aa299374(v=vs.60)?redirectedfrom=MSDN
# directx scan codes http://www.gamespp.com/directx/directInputKeyboardScanCodes.html

#Mouse scan codes: https://stackoverflow.com/questions/11229808/right-click-in-python-using-ctypes

## CODE TAKEN FROM ##
#FROM: https://stackoverflow.com/questions/14489013/simulate-python-keypresses-for-controlling-a-game
#mousemoveto from: sttackoverflow "python directinput mouse relative moving act not as expected"
#left_click from: https://stackoverflow.com/questions/54954041/python-mouse-click-for-game-direct-input
