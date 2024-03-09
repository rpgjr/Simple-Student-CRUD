import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "reactstudent_db"
})

app.use(express.json())
app.use(cors())

app.get("/students", (req, res) => {
  const q = "select * from students"
  db.query(q, (err, data) => {
    if(err) {
      return res.json(err)
    }
    return res.json(data)
  })
})

app.post("/students", (req, res) => {
  const q = "insert into students (`stud_name`, `stud_number`, `stud_year`, `stud_section`) values (?)"
  const values = [
    req.body.stud_name,
    req.body.stud_number,
    req.body.stud_year,
    req.body.stud_section
  ]

  db.query(q, [values], (err, data) => {
    if(err) {
      return res.json(err)
    }
    return res.json("Student successfully added!")
  })
})

app.delete("/students/:id", (req, res) => {
  const stud_id = req.params.id
  const q = "delete from students where stud_id = ?"

  db.query(q, [stud_id], (err, data) => {
    if(err) {
      return res.json(err)
    }
    return res.json("Student successfully deleted!")
  })
})

app.put("/students/:id", (req, res) => {
  const stud_id = req.params.id
  const q = "update students set `stud_name` = ?, `stud_number` = ?, `stud_year` = ?, `stud_section` = ? where stud_id = ?"
  const values = [
    req.body.stud_name,
    req.body.stud_number,
    req.body.stud_year,
    req.body.stud_section
  ]

  db.query(q, [...values, stud_id], (err, data) => {
    if(err) {
      return res.json(err)
    }
    return res.json("Student successfully update!")
  })
})

app.listen(8800, () => {
  console.log("Connected to backend!");
});
