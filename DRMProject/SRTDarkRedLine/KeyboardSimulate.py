import keyboard
# Press z to value 231(z)
keyboard.add_hotkey('z', lambda: keyboard.write('1')) 
keyboard.wait('esc')