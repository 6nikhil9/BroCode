#include <iostream>
using namespace std;

int main()
{
    int *pointer = nullptr;
    int x = 123;

    //pointer = &x;

    if(pointer== nullptr){
        cout << "address was not assingened\n";
        cout << *pointer;
    }
    else{
        cout <<"address was assigned\n"; 
    }
}