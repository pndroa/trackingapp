"use client"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
import { ColDef } from "ag-grid-community"
import { useEffect, useState } from "react"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"

const Summary = () => {
  const [data, setData] = useState()
  const [breakfastData, setBreakfastData] = useState()
  const [lunchData, setLunchData] = useState()
  const [dinnerData, setDinnerData] = useState()
  const router = useRouter()

  const handleDeleteButton = async ({ Id }) => {
    const result = confirm("Are you sure want to delete this food")
    if (result) {
      try {
        const res = await fetch(`/api/foods/byFid/${Id}`, {
          method: "DELETE",
        })
        location.reload()
      } catch (error) {
        console.error(error)
      }
    }
  }

  const handleEditButton = async ({ Id }) => {
    try {
      const res = await fetch(`/api/foods/byFid/${Id}`, {
        method: "PATCH",
      })
      location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  const CustomButtonComponent = ({ data }) => {
    return (
      <div>
        <button
          style={{
            backgroundColor: "#512da8",
            color: "#fff",
            fontSize: "12px",
            padding: "5px 10px",
            border: "1px solid transparent",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => handleEditButton(data)}
        >
          Edit
        </button>
        <button
          style={{
            backgroundColor: "#512da8",
            color: "#fff",
            fontSize: "12px",
            padding: "5px 10px",
            border: "1px solid transparent",
            borderRadius: "8px",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
          onClick={() => handleDeleteButton(data)}
        >
          Delete
        </button>
      </div>
    )
  }

  const [colDefs, setColDefs] = useState([
    { field: "Name" },
    { field: "Kalorien" },
    { field: "Kohlenhydrate" },
    { field: "Proteine" },
    { field: "Fat" },
    { field: "Fleisch" },
    { field: "Vegetarisch" },
    { field: "Vegan" },
    {
      field: "actions",
      headerName: "Actions",
      cellRenderer: CustomButtonComponent,
    },
  ])

  useEffect(() => {
    const fetchData = async () => {
      const currentSession = await getSession()
      if (currentSession && currentSession.user) {
        const res = await fetch(
          `/api/foods/byEmail/${currentSession.user.email}`
        )
        const jsonData = await res.json()
        setData(jsonData)
      } else {
        setData([])
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (data) {
      const formattedData = data.map((item) => ({
        Id: item.fid,
        Name: item.name,
        Kalorien: item.calories,
        Kohlenhydrate: item.carbohydrates,
        Proteine: item.protein,
        Fat: item.fat,
        Fleisch: item.containsMeat,
        Vegetarisch: item.vegetarian,
        Vegan: item.vegan,
        Breakfast: item.breakfast,
        Lunch: item.lunch,
        Dinner: item.dinner,
      }))

      const breakfastItems = formattedData.filter((item) => item.Breakfast)
      const lunchItems = formattedData.filter((item) => item.Lunch)
      const dinnerItems = formattedData.filter((item) => item.Dinner)

      setBreakfastData(breakfastItems)
      setLunchData(lunchItems)
      setDinnerData(dinnerItems)
    }
  }, [data])

  return (
    <div>
      <div>
        <h1>Breakfast</h1>
        <div
          className="ag-theme-quartz"
          style={{
            width: "100%",
            fontSize: "14px",
            lineHeight: "1.4",
          }}
        >
          <AgGridReact
            rowData={breakfastData}
            columnDefs={colDefs}
            domLayout="autoHeight"
            headerHeight={40}
            onGridReady={(params) => {
              params.api.sizeColumnsToFit()
            }}
          />
        </div>
      </div>

      <div>
        <h1>Lunch</h1>
        <div
          className="ag-theme-quartz"
          style={{
            width: "100%",
            fontSize: "14px",
            lineHeight: "1.4",
          }}
        >
          <AgGridReact
            rowData={lunchData}
            columnDefs={colDefs}
            domLayout="autoHeight"
            headerHeight={40}
            onGridReady={(params) => {
              params.api.sizeColumnsToFit()
            }}
          />
        </div>
      </div>

      <div>
        <h1>Dinner</h1>
        <div
          className="ag-theme-quartz"
          style={{
            width: "100%",
            fontSize: "14px",
            lineHeight: "1.4",
          }}
        >
          <AgGridReact
            rowData={dinnerData}
            columnDefs={colDefs}
            domLayout="autoHeight"
            headerHeight={40}
            frameworkComponents={{
              customButtonRenderer: CustomButtonComponent,
            }}
            cellRenderer="customButtonRenderer"
            cellRendererParams={{ rowData: dinnerData }}
            onGridReady={(params) => {
              params.api.sizeColumnsToFit()
            }}
          />
        </div>
      </div>
      <div>
        Summary Page
        <button
          onClick={() => {
            alert("Add your breakfast")
          }}
        >
          Add Breakfast
        </button>
        <button
          onClick={() => {
            alert("Add your lunch")
          }}
        >
          Add lunch
        </button>
        <button
          onClick={() => {
            alert("Add your dinner")
          }}
        >
          Add dinner
        </button>
      </div>
    </div>
  )
}

export default Summary
