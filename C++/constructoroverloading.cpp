#include <iostream>
using namespace std;

class pizza{
    public:
    string topping1;
    string topping2;

    pizza(string topping1){
        this->topping1 = topping1;
    }
    pizza(string topping1,string topping2){
        this->topping2 = topping2;
    }
};

int main(){

    pizza pizza1("pepperoni");
    pizza pizza2("mushrooms", "peppers");

    cout << pizza1.topping1 << '\n';
    cout << pizza2.topping2 << '\n';

    return 0;
}