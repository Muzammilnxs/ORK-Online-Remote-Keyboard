import pyautogui as p
import threading as t

sem = t.Semaphore()
fName = "KeyboardInput.txt"
kInput = ""

def readKeys():
	with open(fName, "r") as f:
		global kInput
		kInput = f.read()
		f.close()
	open(fName, 'w').close()

while True:
	sem.acquire()
	readKeys()
	sem.release()
	if " " in kInput:	#TODO: confirm seperator
		comb = kInput.split()
		p.hotkey([i for i in comb])
	else:
		p.press(kInput)
	kInput = ""