const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const Membership = require('./model/membershipModel')
const User = require('./model/userModel')
const Admin = require('./model/adminModel')
const Activity = require('./model/activityModel')
const Class = require('./model/classModel')
const Booking = require('./model/bookingModel')
const LogMachineTracking = require('./model/logMachineTrackingModel')
const CheckInNOut = require('./model/checkInNOutModel')
const MembershipPlan = require('./model/membershipPlan')

const cors = require("cors")
const moment = require('moment');

// Schedule the cron job to run at midnight every day

app.use(express.json())

require('dotenv').config();

app.use(
  cors({
    origin : "*",
  })
)

//hard coded need to change if we change activities in DB
const activityMap = new Map();
activityMap.set("1","boxing")
activityMap.set("2","cardio")
activityMap.set("3","strength")
activityMap.set("4","yoga")
activityMap.set("5","zumba")

const caloriesMap = new Map();
caloriesMap.set("1",325)
caloriesMap.set("2",180)
caloriesMap.set("3",390)
caloriesMap.set("4",120)
caloriesMap.set("5",300)

const machineSet = new Set();
machineSet.add('Treadmill')
machineSet.add('Cross Fit')
machineSet.add('Cross Ramp')
machineSet.add('Excercise Bike')
machineSet.add('Rowing Machine')

const machineCaloriesMap = new Map();
machineCaloriesMap.set("Treadmill",258)
machineCaloriesMap.set("Cross Fit",460)
machineCaloriesMap.set("Cross Ramp",390)
machineCaloriesMap.set("Excercise Bike",500)
machineCaloriesMap.set("Rowing Machine",600)

app.listen(port, () => {
  console.log(`Gym Management app is running on ${port}`)
})

mongoose.connect("mongodb+srv://suchandranathbajjuri:Suchi7@cluster202.v83m9mk.mongodb.net/Gym_Management?retryWrites=true&w=majority")
  .then(() => {

    app.post('/createTodaysClasses',async(req,res)=>{
         // Code to run at the beginning of a new day

        try {
          // console.log("Triggered!!!!!!!");
          const now = new Date();
          for (let i = 0; i < 20; i++) {
            now.setDate(now.getDate() + 1);
            const todaysDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
            const today7 = new Date(todaysDate.getTime() + 7 * 60 * 60 * 1000);
            const today8 = new Date(todaysDate.getTime() + 8 * 60 * 60 * 1000);
            const today9 = new Date(todaysDate.getTime() + 9 * 60 * 60 * 1000);
            const today10 = new Date(todaysDate.getTime() + 10 * 60 * 60 * 1000);
            const today11 = new Date(todaysDate.getTime() + 11 * 60 * 60 * 1000);
            const req1 = { "activityId" : "1", "location" : "San jose", "startTime" : today7, "endTime" : today8,"capacity" : 20, "instructor" : "yogesh" }
            const req2 = { "activityId" : "2", "location" : "San jose", "startTime" : today8, "endTime" : today9,"capacity" : 20, "instructor" : "Preethi" }
            const req3 = { "activityId" : "3", "location" : "San jose", "startTime" : today7, "endTime" : today8,"capacity" : 20, "instructor" : "Madhuri" }
            const req4 = { "activityId" : "4", "location" : "San jose", "startTime" : today10, "endTime" : today11,"capacity" : 20, "instructor" : "Suchandra" }
            const req13 = { "activityId" : "5", "location" : "San jose", "startTime" : today10, "endTime" : today11,"capacity" : 20, "instructor" : "yogesh" }

            const req5 = { "activityId" : "1", "location" : "Milpitas", "startTime" : today7, "endTime" : today8,"capacity" : 20, "instructor" : "Suchandra" }
            const req6 = { "activityId" : "2", "location" : "Milpitas", "startTime" : today8, "endTime" : today9,"capacity" : 20, "instructor" : "Srujith" }
            const req7 = { "activityId" : "3", "location" : "Milpitas", "startTime" : today7, "endTime" : today8,"capacity" : 20, "instructor" : "Nitish" }
            const req8 = { "activityId" : "4", "location" : "Milpitas", "startTime" : today10, "endTime" : today11,"capacity" : 20, "instructor" : "Saketh" }
            const req14 = { "activityId" : "5", "location" : "Milpitas", "startTime" : today10, "endTime" : today11,"capacity" : 20, "instructor" : "yogesh" }

            const req9 = { "activityId" : "1", "location" : "Sunnyvale", "startTime" : today7, "endTime" : today8,"capacity" : 20, "instructor" : "Vishal" }
            const req10 = { "activityId" : "2", "location" : "Sunnyvale", "startTime" : today7, "endTime" : today8,"capacity" : 20, "instructor" : "Srujith" }
            const req11 = { "activityId" : "3", "location" : "Sunnyvale", "startTime" : today9, "endTime" : today10,"capacity" : 20, "instructor" : "Preethi" }
            const req12 = { "activityId" : "4", "location" : "Sunnyvale", "startTime" : today10, "endTime" : today11,"capacity" : 20, "instructor" : "Madhuri" }
            const req15 = { "activityId" : "5", "location" : "Sunnyvale", "startTime" : today10, "endTime" : today11,"capacity" : 20, "instructor" : "Suchandra" }

            const req16 = { "activityId" : "1", "location" : "Mountain View", "startTime" : today7, "endTime" : today8,"capacity" : 10, "instructor" : "satya" }
            const req17 = { "activityId" : "2", "location" : "Mountain View", "startTime" : today7, "endTime" : today8,"capacity" : 10, "instructor" : "sundar" }
            const req18 = { "activityId" : "3", "location" : "Mountain View", "startTime" : today9, "endTime" : today10,"capacity" : 10, "instructor" : "Jhon" }
            const req19 = { "activityId" : "4", "location" : "Mountain View", "startTime" : today10, "endTime" : today11,"capacity" : 10, "instructor" : "satya" }
            const req20 = { "activityId" : "5", "location" : "Mountain View", "startTime" : today10, "endTime" : today11,"capacity" : 10, "instructor" : "Jhon" }


            await Class.create(req1);
            await Class.create(req2);
            await Class.create(req3);
            await Class.create(req4);
            await Class.create(req5);
            await Class.create(req6);
            await Class.create(req7);
            await Class.create(req8);
            await Class.create(req9);
            await Class.create(req10);
            await Class.create(req11);
            await Class.create(req12);
            await Class.create(req13);
            await Class.create(req14);
            await Class.create(req15);
            await Class.create(req16);
            await Class.create(req17);
            await Class.create(req18);
            await Class.create(req19);
            await Class.create(req20);

          }
          res.status(200).json( {message: "succesfully created one week classes at all the locations"} );
          console.log("created one week classes");
          
        } catch (error) {
              console.log(error)
            res.status(500).json({message: error.message})
        }
      
    })

    app.get('/', (req, res) => {
      res.send('Hello GYM!')
    })
    console.log('Connected!')

    app.get('/gym',(req,res)=>{
      res.send('inside 202 Gym')
    })

    // gets all the avilable member ids along with user ids
    app.get('/members', async(req,res)=>{
      try {
        const memberships= await Membership.find({});
        res.status(200).json(memberships);
      } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
      }
    });

  }
  ).catch((error)=>console.log("db connection error"+error));