/*
                 1
               /   \
              /     \
             /       \
            /         \
          2             3
         / \          /   \
        /   \        /     \
       /     \      /       \
      4       5    6         7
             / \            / \
            /   \          /   \
           /     \        /     \
          8       9      10     11
                        /  \
                       /    \
                      /      \
                     12      13
*/
// Traverse the nodes and add them to an array so the final array is: [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen]
const treeJson = {
  "id": "one",
  "children": [
    {
      "id": "two",
      "children": [
        {
          "id": "four",
          "children": []
        },
        {
          "id": "five",
          "children": [
            {
              "id": "eight",
              "children": []
            },
            {
              "id": "nine",
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": "three",
      "children": [
        {
          "id": "six",
          "children": []
        },
        {
          "id": "seven",
          "children": [
            {
              "id": "ten",
              "children": [
                {
                  "id": "twelve",
                  "children": []
                },
                {
                  "id": "thirteen",
                  "children": []
                }
              ]
            },
            {
              "id": "eleven",
              "children": []
            }
          ]
        }
      ]
    }
  ]
};
