#include <iostream>
using namespace std;

class car{
    public:
    string make;
    string model;
    int year;
    string color;

    car(string make,string model,int year,string color){
        this->make = make;
        this->model = model;
        this->year = year;
        this->color = color;
    }
};

int main(){ 
   car car1("toyota","fortuner",2024,"white");

   cout << car1.make << '\n';
    cout << car1.model << '\n';
    cout << car1.year << '\n';
    cout << car1.color << '\n';
}