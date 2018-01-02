var explorerDataEn = {
  'add': {
    'end': {
      'name': 'push',
      'link_name': 'push',
      'desc': 'Adds element(s) to the end of an array. Returns the modified array',
      'text': "nums = [2, 3, 5] #=> [2, 3, 5]<br>nums << 8 #=> [2, 3, 5, 8]<br>nums.push(13, 21) #=> [2, 3, 5, 8, 13, 21]<br>nums.push(37) #=> [2, 3, 5, 8, 13, 21, 37]"
    },
    'start': {
      'name': 'unshift',
      'link_name': 'unshift',
      'desc': 'Adds element(s) to the front of an array. Returns the modified array',
      'text': 'nums = [4, 5, 6] #=> [4, 5, 6]<br>nums.unshift(3) #=> [3, 4, 5, 6]<br>nums.unshift(1, 2) #=> [1, 2, 3, 4, 5, 6]'
    },
    'insert': {
      'name': 'insert',
      'link_name': 'insert',
      'desc': 'Inserts the given element(s) before the element with the given index. Returns the modified array',
      'text': "nums = [3, 4, 5, 6] #=> [4, 5, 6]<br>nums.insert(2, 9)  #=> [3, 4, 9, 6]<br>nums.insert(2, 'one', 1) #=>[3, 4, \"one\", 1, 9, 6]"
    },
    'concat': {
      'name': '+',
      'link_name': '2B',
      'desc': 'Returns a new array built by adding (concatenating) two arrays together',
      'text': "nums = [4, 5, 6] #=> [4, 5, 6]<br>more_nums = nums + [1, 2] #=> [4, 5, 6, 1, 2]<br>nums #=> [4, 5, 6]<br><br>[4, 5, 6] + [1, 2] #=> [4, 5, 6, 1, 2]"
    }
  }
}

var explorerData = {
  'en': explorerDataEn
}
