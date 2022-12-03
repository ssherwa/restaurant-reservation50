import app from "../index.js";
import request from "supertest";
import mongoose from "mongoose";


describe("users", () => {
  test("It should respond with a 200 status code", async () => {
    const response = await request(app).get("/tables");

    expect(response.status).toBe(200);
  });

  test("It should respond with an array of tables", async () => {
    const response = await request(app).get("/tables");
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("login", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({
        username: "tom",
        password:"abcd"
      });

    expect(response.status).toBe(200);
  });

  test("register", async () => {
    const response = await request(app)
      .post("/auth/register")
      .send({
        username: "test",
        password:"test",
        email:"test@test.com",
        mailingaddress:"123 test st",
        billingaddress:"123 test st",
      });
  });

});

describe("tables", () => {
  test("It should respond with a 200 status code", async () => {
    const response = await request(app).get("/tables");

    expect(response.status).toBe(200);
  });

  test("It should respond with an array of tables", async () => {
    const response = await request(app).get("/tables");
    expect(Array.isArray(response.body)).toBe(true);
  }
  );

});



describe("bookings", () => {
  test("It should respond with a 200 status code", async () => {
    const response = await request(app).get("/bookings");

    expect(response.status).toBe(200);
  });

  test("It should respond with an array of bookings", async () => {
    const response = await request(app).get("/bookings");
    expect(Array.isArray(response.body)).toBe(true);
  }
  );

  test("create booking", async () => {
    const response = await request(app)
      .post("/bookings")
      .send({
        Date: "2022-12-13T06:00:00.000Z",
        Time: "01:30",
        Name: "dem",
        Email: "dem@yahoo",
        Phone: "1234567890",
        NumberOfPeople: 3,
        Status:true
      }
      );

    expect(response.status).toBe(200);

  });

});




describe("canary test", () => {
  it("should pass", () => {
    expect(true).toBeTruthy();
  });
});

// describe("get /auth/login", () => {
//   it("should return 200", async () => {
//     const response = await request(app).get("/auth/login");
//     expect(response.status).toBe(200);
//   });
// });
