'use client';
import React, { useState } from 'react';
import styles from './Summary.module.css';




const Summary = () => {
  const [showOverlay, setShowOverlay] = useState(false) //overlay false till button clicked 
  const [chooseMeal, setChooseMeal] = useState("noMeal")
  

  const [mainDish, setMainDish] = useState({
    meat: "no",
    vegetarian: "no",
    vegan: "no"
  })
  

  //make popup visible
  const mealSelected = (meal) => {
    setShowOverlay(true), // when true overlay is seen
    setChooseMeal(meal)
  }

  //make popup visible
  const closePage = () => {
    setShowOverlay(false) // when false overlay is invisible  
  }

  //buttons to choose meat, vegetarian, vegan 
const onOptionChange = (type) => (e) => {
  //...mainDish copies array 
  setMainDish({
    ...mainDish,
    [type]: e.target.value
  })
}


const onSubmit = (e) =>{
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const meal ={
    name : formData.get('name'),
    calories : formData.get('calories'),
    carbohydrates : formData.get('carbohydrates'),
    protein : formData.get('protein'),
    fat : formData.get('fat'),
    meat : mainDish.meat,
    vegetarian : mainDish.vegetarian,
    vegan : mainDish.vegan,
  }
  console.log(meal.name)
  console.log(meal.calories)
  console.log(meal.carbohydrates)
  console.log(meal.fat)
  console.log(meal.meat)
  console.log(meal.vegetarian)
  console.log(meal.vegan)
}
  
const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
}


  return (
    <div>
      Summary Page
      <button onClick={() => { mealSelected('breakfast') }}>
        Add Breakfast
      </button>

      <button onClick={() => { mealSelected('lunch') }}>
        Add lunch
      </button>

      <button onClick={() => { mealSelected('dinner') }}>
        Add dinner
      </button>

      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.text}>
            <form onSubmit={onSubmit} onKeyPress={handleKeyPress}>
              <button type="button" className={styles.button} onClick={() => closePage()}>
                close
              </button>
              <div className={styles.tables}>
                <div className={styles.headline}>Enter your {chooseMeal}</div>
                <div>
                  <table>
                    <thead><tr><th></th></tr></thead>
                    <tbody>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor='name'>Name :</label>
                          <input type='name' id='name' name='name' ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="calories">Calories :</label>
                          <input type="calories" id="calories" name="calories" ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="carbohydrates">Carbohydrates :</label>
                          <input type="carbohydrates" id="carbohydrates" name="carbohydrates"  ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="protein">Protein :</label>
                          <input type="protein" id="protein" name="protein"  ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="fat">Fat :</label>
                          <input type="fat" id="fat" name="fat" ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="meat">Meat :</label>
                          <input type="radio" id="meat" name="mainDish" value="yes" checked={mainDish.meat === 'yes'} onChange={onOptionChange('meat')} className="radio-button"></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="vegetarian">Vegetarian :</label>
                          <input type="radio" id="vegetarian" name="mainDish" value="yes" checked={mainDish.vegetarian === 'yes'} onChange={onOptionChange('vegetarian')} className="radio-button"></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="vegan">Vegan :</label>
                          <input type="radio" id="vegan" name="mainDish" value="yes" checked={mainDish.vegan === 'yes'} onChange={onOptionChange('vegan')} className="radio-button"></input>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>
                          <button type="submit" className={styles.sendButton}>Send</button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>)}
    </div>
  )
}

export default Summary
