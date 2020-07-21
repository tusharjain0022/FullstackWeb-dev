for _ in ramge(int(input())):
    n=int()
    s=input()
    freq={}
    flag=0
    for i in s: 
      if i in all_freq: 
        freq[i] += 1
      else: 
        freq[i] = 1
    s=list(s)
    for key in freq:
        if key%2!=0:
            print("NO")
            flag=1
            break
    if flag==0:
        print("YES")
1001110101