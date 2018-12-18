import numpy as np
import os
import json
import sys

myDataInPython = json.load(sys.stdin)

fname = 'roomids.txt'
exist = os.path.isfile(fname)
if not exist :
    f= open(fname,"w+")
    f.close

roomids = np.loadtxt(fname)

roomid = 3
if roomid not in roomids :
    roomids = np.append(roomids,roomid)

    np.savetxt(fname,roomids)
    exit(1)
else:
    exit(0)
