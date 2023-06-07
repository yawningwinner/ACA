#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int binarySearch(vector<float> arr, int l, int r, float x)
{
    if (r >= l) {
        int mid = l + (r - l) / 2;

        // If the element is present at the middle
        // itself
        if (!(arr[mid] - x))
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if ((arr[mid] - x )> 0)
            return binarySearch(arr, l, mid - 1, x);

        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid + 1, r, x);
    }
    return -1;
}

int main() {
    int N = 5;
    float a[] = {10.5, 6.0, 68.9, 50.0, 8.7}; // GIVEN
    vector<float> v(N);
    int t = N;
    while (t--) {
        v[t] = a[N-t-1];
    }
    sort(v.begin(), v.end());
    t = N;
    while(t--){
        cout << v[t] << " ";
    }
    float x = 50.0;
    cout << binarySearch(v, 0, N - 1, x);
}
