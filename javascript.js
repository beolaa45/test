// Bai 1. Cấu trúc lại mảng:
// ➢ Yêu cầu: Cho 1 mảng 3n phần tử các số nguyên, giả sử cấu trúc như sau
// [x1, x2, .., xn, y1, y2, …, yn, z1, z2, …, zn]. Hãy tổ chức lại các giá trị mảng trên về cấu
// trúc như sau [x1, y1, z1, x2, y2, z2, ..., xn, yn, zn]
// ➢ Ví dụ:
// ● Input: n=3, $arr = [11, 2, 8, 10, 5, 99, 1, 8, 9]
// → Output [11, 10, 1, 2, 5, 8, 8, 99, 9]

function bai1(n, arr){
    // let newArr1 = [];
    // let newArr2 = [];
    // let newArr3 = [];
  
    // arr.forEach((element,index) => {
    //    if(index === n / 3 -1 ){
    //     newArr1.push(element)
        
    //    }else if(index === n / 3 ){
    //        newArr2.push(element)
    //    }else if(index === n / 3 + 1){
    //        newArr3.push(element)
    //    }
    // });
    // console.log("arrr",newArr1)
}

bai1(3,[11, 2, 8, 10, 5, 99, 1, 8, 9])


////
// Bai 2
// Tìm tổng lớn nhất của 2 phần tử trong mảng số nguyên:
// ➢ Yêu cầu: Cho một mảng các phần tử số nguyên, giá trị mỗi phần tử nằm trong
// khoảng [-(2^30), 2^30 - 1] , tìm tổng lớn nhất được tạo thành từ 2 phần tử trong
// mảng.
// ➢ Ví dụ:
// ● Input: [0, 100, -4, 8, 143, 5, 99, 100]
// ● Output: 243
const Bai2 = (array) => {
    const newArray = array.sort((a, b) => b - a)
    return newArray[0] + newArray[1]
  }
  
  console.log(Bai2([0, 100, -4, 8, 143, 5, 99, 100]))
  



//   Tìm các cặp giá trị có khoảng cách nhỏ nhất:
//   ➢ Yêu cầu: Cho 1 mảng các số nguyên, tìm các cặp giá trị có khoảng cách bằng với
//   khoảng cách nhỏ nhất giữ 2 phần tử trong mảng (khoảng cách là giá trị dương). Mỗi
//   phần tử trong mảng ban đầu có thể nằm trong nhiều cặp giá trị kết quả. Giới hạn
//   mảng max 10.000 phần tử.
//   ➢ Ví dụ:
//   ● Input: [1, 5, 4, 7, 9, 0, -10, 13, 93, 14, 15]
//   Sau khi tính toàn thì thấy khoảng cách nhỏ nhất giữa 2 phần tử trong mảng là 1.
//   Do đó output sẽ có các cặp giá trị sau: [[0, 1], [4, 5], [13, 14], [14, 15]]
const bai3 = (array) => {
    const sortArray = array.sort((a, b) => a - b)
    let minRange = sortArray[1] - sortArray[0]
    const b3 = () => {
      const newList = []
      for (let i = 0; i < sortArray.length; i++) {
        if (sortArray[i + 1] - sortArray[i] < minRange) {
          minRange = sortArray[i + 1] - sortArray[i]
        }
      }
      for (let i = 0; i < sortArray.length; i++) {
        if (sortArray[i + 1] - sortArray[i] === minRange) {
          newList.push([sortArray[i], sortArray[i + 1]])
        }
      }
      return newList
    }
    return b3()
  }