fn main() {
    let mut v = vec![];
    let mut temp = 10000;

    while temp > 0 {
        v.push(temp);
        temp = temp - 1;
    }
    println!("{:?}",selection_sort(v));
}

//recieves a reference to a vector of unsorted integers and returns 
//the index of the smallest integer
fn find_smallest(arr: &Vec<usize>) -> usize {
    let mut smallest = arr[0];
    let mut postion = 0;
    let mut index = 0;

    while index < arr.len() {
        if arr[index] < smallest {
            smallest = arr[index];
            postion = index
        }
        index = index + 1;
    }
    postion
}

//recieves a vector of unsorted intgers and returns it sorted
fn selection_sort(arr: Vec<usize>) -> Vec<usize> {
    let mut new_array = arr.clone();
    let mut sorted_array = Vec::with_capacity(arr.len());

    for _i in arr {
        let temp = find_smallest(&new_array);
        sorted_array.push(new_array.remove(temp));
    }
    sorted_array
}