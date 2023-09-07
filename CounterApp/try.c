#include <stdio.h>

int main()
{
  // a 4 bytes memory allocated
  int a;
  // a = 45;
  // The memory assigned to a character variable is 1 byte
  char s = 'a';
  // float f = 2.44;

  scanf("%d", &a);

  // printf("The type of a is %c", typedef(a));

  // printf("The value of a is %d", a);

  // printf("hello arsalan");

  printf("This is integer %d, this is char %c, this is float %.2f", a, s, f);
  return 0;
}