fn main() {
    let mut arr = vec![];
    let mut count  = 0;
    while arr.len() <= 6457894 {
        arr.push(count);
        count = count + 1;
    }
    println!("{}",binary_search(arr,7588));
}

//recieves a vector of sorted integers and also an integer, 
//then searches for the integer in the vector
fn binary_search(arr: Vec<usize>, item: usize) -> &'static str  {/****/
    //index of integer in the middle of the vector
    let middle: usize = arr.len() / 2;
    let mut temp = vec![];

    
    if arr.len() == 1 && arr[0] != item {
        return "not found";
    }

    if arr[middle] == item {
        return "found";
    } else if arr[middle] < item {
        temp = arr[middle..].to_vec();
    } else if arr[middle] > item {
        temp = arr[0..middle].to_vec();
    }

    return binary_search(temp, item);
}

