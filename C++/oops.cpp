#include <iostream>
using namespace std;

class Human{
    public:
    string name;
    int age;
    string occupation;
    
    void eat(){
        cout<< "this motherfucker is eating\n";
    }
    void drink(){
        cout<< "this motherfucker is drinking piss\n";
    }
    void sleep(){
        cout<< "this motherfucker is sleeping\n";
    }
};

int main() {
    Human human1;

    human1.name = "lund";
    human1.age  = 10,000;
    human1.occupation = "stripper";

    cout<< human1.name << '\n';
    cout<< human1.age << '\n';
    cout<< human1.occupation << '\n';

    human1.eat();
    human1.sleep();
    human1.drink();

    return 0;


}