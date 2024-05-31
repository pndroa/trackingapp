'use client';
import React, { useState } from 'react';
import styles from './Summary.module.css';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component



const Summary = () => {
  const [showOverlay, setShowOverlay] = useState(false);  //overlay false till button clicked 
  const [chooseMeal, setChooseMeal] = useState("noMeal");

  //make popup visible
  const mealSelected = (meal) => {
    setShowOverlay(true), // when true overlay is seen
      setChooseMeal(meal)
  }

  //make popup visible
  const closePage = () => {
    setShowOverlay(false) // when false overlay is invisible  
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
            <form method="post" action="">
              <button type="close" class={styles.button} onClick={() => closePage()}>
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
                          <label className={styles.label} for="textbox">Name :</label>
                          <input type="text" id="textbox" name="textbox"></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} for="textbox">Calories :</label>
                          <input type="text" id="textbox" name="textbox"></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} for="textbox">Carbohydrates :</label>
                          <input type="text" id="textbox" name="textbox"></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} for="textbox">Protein :</label>
                          <input type="text" id="textbox" name="textbox"></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} for="textbox">Fat :</label>
                          <input type="text" id="textbox" name="textbox"></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} for="textbox">Meat :</label>
                          <input type="radio" id="Fleisch" name="options" class="radio-button"></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} for="textbox">Vegetarian :</label>
                          <input type="radio" id="Vegetarisch" name="options" class="radio-button"></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className={styles.label} for="textbox">Vegan:</label>
                          <input type="radio" id="Vegan" name="options" class="radio-button"></input>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>
                          <button type="submit" class={styles.sendButton}>Send</button>
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
