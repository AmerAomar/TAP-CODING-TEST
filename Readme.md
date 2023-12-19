# My Portfolio and JavaScript TwoSum Assignment

## Portfolio Website

### Description

Hey there! 👋 Welcome to my personal portfolio! I've crafted this site using HTML and CSS to showcase my skills and personality. I added my own unique touches to the design to make it truly mine.

### Design

I followed the structure, layout, fonts, and colors provided in the image but added my personal flair.

### Features

- **HTML and CSS:**
  - Utilized semantic HTML elements for a clean structure.
  - Applied stylish CSS to make it visually appealing.
  - Used CSS variables to define colors.
  - Incorporated the awesome Poppins font ([Poppins](https://fonts.google.com/specimen/Poppins)).

- **Responsive Design:**
  - Ensured the webpage is responsive and looks great on all screen sizes.

### Deployment

I've deployed my portfolio on [GitHub Pages](https://github.com/AmerAomar/TAP-CODING-TEST/settings/pages). Check it out [here](https://ameraomar.github.io/TAP-CODING-TEST/)!

## JavaScript TwoSum Assignment

### Description

I tackled the JavaScript TwoSum assignment and came up with a solution to find indices of two numbers in an array that add up to a target.

### Code

Here's a sneak peek at my solution:

```javascript
function twoSum(nums, target) {

    if (nums.length < 2 || typeof target !== 'number') {
        return [];
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}

```

## Whiteboard

![Whiteboard](./assets/tap%20JS%20question%20whiteboard.png)

I've also broken down the problem domain, input/output types, test cases, edge cases, visualization, algorithm, and time/space complexity on the whiteboard.

## Submission

I pushed both the portfolio website and the JavaScript assignment to the same repository.

Thanks for stopping by and checking out my work! If you have any questions or suggestions, feel free to reach out.

Enjoy exploring my portfolio and understanding the logic behind my JavaScript solution! 🚀
