'use client';
import React, { useState } from 'react';
import styles from './Summary.module.css';




const Summary = () => {
  const [showOverlay, setShowOverlay] = useState(false) //overlay false till button clicked 
  const [chooseMeal, setChooseMeal] = useState("noMeal")
  const [mainDish, setMainDish,] = useState("nothing")


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
  const onOptionChange = (e) => {
    setMainDish(e.target.value)
  }



  const onSubmit = (e) => {
    e.preventDefault()
    const main = mainDish
    console.log(main)
    let meat1 = false
    let vegetarian1 = false
    let vegan1 = false
    //finde the one thats picked 
    if (main === 'meat') { meat1 = true }
    else if (main === 'vegetarian') { vegetarian1 = true }
    else if (main === 'vegan') { vegan1 = true }

    const formData = new FormData(e.currentTarget)
    const meal = {
      name: formData.get('name'),
      calories: formData.get('calories'),
      carbohydrates: formData.get('carbohydrates'),
      protein: formData.get('protein'),
      fat: formData.get('fat'),
      meat: meat1,
      vegetarian: vegetarian1,
      vegan: vegan1
    }
    /** 
    console.log(meal.name)
    console.log(meal.calories)
    console.log(meal.carbohydrates)
    console.log(meal.protein)
    console.log(meal.fat)
    console.log(meal.meat)
    console.log(meal.vegetarian)
    console.log(meal.vegan)
*/
    console.log(meal)

    closePage();
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
                          <input type='name' id='name' name='name' required></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="calories">Calories :</label>
                          <input type="calories" id="calories" name="calories" required></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="carbohydrates">Carbohydrates :</label>
                          <input type="carbohydrates" id="carbohydrates" name="carbohydrates" required></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="protein">Protein :</label>
                          <input type="protein" id="protein" name="protein" required></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="fat">Fat :</label>
                          <input type="fat" id="fat" name="fat" required></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="meat">Meat :</label>
                          <input type="radio" id="meat" name="mainDish" value="meat" checked={mainDish === 'meat'} onChange={onOptionChange} className="radio-button" required></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="vegetarian">Vegetarian :</label>
                          <input type="radio" id="vegetarian" name="mainDish" value="vegetarian" checked={mainDish === 'vegetarian'} onChange={onOptionChange} className="radio-button" required></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} htmlFor="vegan">Vegan :</label>
                          <input type="radio" id="vegan" name="mainDish" value="vegan" checked={mainDish === 'vegan'} onChange={onOptionChange} className="radio-button" required></input>
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
