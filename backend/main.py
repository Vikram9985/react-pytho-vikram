from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/api/rides")
def get_rides():
    return [
        {
            "rideId": "#R-1024",
            "driver": "Anjli Singh",
            "passenger": "Yashvi Singh",
            "fare": 24.50,
            "status": "Active"
        },
        {
            "rideId": "#R-1025",
            "driver": "Anjli Singh",
            "passenger": "Yashvi Singh",
            "fare": 24.50,
            "status": "Picking up"
        },
        {
            "rideId": "#R-1026",
            "driver": "Anjli Singh",
            "passenger": "Yashvi Singh",
            "fare": 24.50,
            "status": "Completed"
        },
        {
            "rideId": "#R-1027",
            "driver": "Anjli Singh",
            "passenger": "Yashvi Singh",
            "fare": 24.50,
            "status": "Cancel"
        },
        {
            "rideId": "#R-1025",
            "driver": "Anjli Singh",
            "passenger": "Yashvi Singh",
            "fare": 24.50,
            "status": "Picking up"
        },{
            "rideId": "#R-1025",
            "driver": "Anjli Singh",
            "passenger": "Yashvi Singh",
            "fare": 24.50,
            "status": "Picking up"
        },{
            "rideId": "#R-1025",
            "driver": "Anjli Singh",
            "passenger": "Yashvi Singh",
            "fare": 24.50,
            "status": "Picking up"
        }
    ]


@app.get("/api/earnings")
def get_earnings(type: str = "month"):
    if type == "day":
        return [
            {"label": "Mon", "amount": 12000},
            {"label": "Tue", "amount": 15000},
            {"label": "Wed", "amount": 18000},
            {"label": "Thu", "amount": 22000},
            {"label": "Fri", "amount": 28000},
            {"label": "Sat", "amount": 30000},
            {"label": "Sun", "amount": 26000},
        ]

    if type == "week":
        return [
            {"label": "Week 1", "amount": 42000},
            {"label": "Week 2", "amount": 38000},
            {"label": "Week 3", "amount": 51000},
            {"label": "Week 4", "amount": 47000},
        ]

    # month (default)
    return [
        {"label": "Jan", "amount": 15000},
        {"label": "Feb", "amount": 12000},
        {"label": "Mar", "amount": 9000},
        {"label": "Apr", "amount": 4000},
        {"label": "Jun", "amount": 28000},
        {"label": "Jul", "amount": 16000},
        {"label": "Aug", "amount": 5000},
        {"label": "Sep", "amount": 2000},
        {"label": "Oct", "amount": 11000},
        {"label": "Nov", "amount": 18000},
        {"label": "Dec", "amount": 7000},
    ]

# Request body structure
class LoginData(BaseModel):
    userId: str
    password: str

# Dummy login API
@app.post("/api/login")
def login(data: LoginData):
    if data.userId == "admin" and data.password == "1234":
        return {"status": "success", "message": "Login Successful"}
    else:
        return {"status": "error", "message": "Invalid User ID or Password"}
