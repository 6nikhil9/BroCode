#include <iostream>
using namespace std;

int main()
{
    int time = 24;
    if (time<12){
    cout << "Good morning.";
    } else if (time <24){
        cout << "Good day";
    } else {
        cout << "Good evening.";
    }
    return 0;
}