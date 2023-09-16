

# Features

- You can show many course with full details.Like course name,price,credit ect.
- Threre is a button.When you clicked the button the course name autoamtically added to the cart.
- You can also see the price and credit of the selected course in the cart.
- when you select a course more than one time you will see a warning.
- Maximum credit limit is 20.If you try to cross the limit then you will see warining.


# FAQ

## Question 1 
- Discuss how you managed the state in your assignment project.


### Answer 1
- The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render. I use useState multiple time in the project.I use useState for course data ,price data , credit data and remaining data.For using useState i set a initial value.then collect the data and set data using setState() and use this data for different purpose i need to complete the project.Like Exaple i use useState for calculate the total cost.I set initial value of useState is 0.Then i use const [cost , setCost].Then calcluate the total cost and kept inside setCost.then pass the value and distructure the value and display this.



