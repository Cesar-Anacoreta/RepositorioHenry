


i = 0;
n = 0;
while (i < 10) {
   i++;
   if (i == 3)
      continue;
   n += i;
   if (i == 5)
      continue;
   n += i;
   if (i == 7)
      continue;
   n += i;
   console.log(i);
}