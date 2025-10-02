#include <iostream>
using namespace std;

int main() {
     
     string love = "I Love You";
     int age = 20;
     string freePizzas[5] = {"pizza1","pizza2","pizza3","pizza4","pizza5"};

     string *plove = &love;
     int *page = &age;
     string *pfreePizzas = freePizzas;


     cout << *plove << '\n';
     cout << *page << '\n';
     cout << *pfreePizzas << '\n';
}