"use client"

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Signup = () => {
  const [LoginEmail, setLoginEmail] = useState("")
  const [LoginPassword, setLoginPassword] = useState("")
  const [SignupName, setSignupName] = useState("")
  const [SignupEmail, setSignupEmail] = useState("")
  const [SignupPassword, setSignupPassword] = useState("")

  const handleSignup = async () => {

    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ SignupName, SignupEmail, SignupPassword })
    })

    if (res.ok) {
      console.log("Signup Successful")
    } else {
      console.error("Signup Failed")
    }
  }

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ LoginEmail, LoginPassword })
    })

    if (res.ok) {
      console.log("Login Successful")
      const data = await res.json();
    } else {
      console.error("Signup Failed")
    }

  }

  return (
    <>
      <div className='text-4xl text-white justify-items-center'>

        <Tabs defaultValue="Login" className="w-[400px] m-20">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="Signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="Login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="loginEmail">Email</Label>
                  <Input
                    id="loginEmail"
                    type="text"
                    placeholder='abc@xyz.com'
                    value={LoginEmail}
                    onChange={(e) => {
                      setLoginEmail(e.target.value);
                      // console.log(LoginEmail);
                    }} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="loginPassword"
                    type="password"
                    placeholder='12345678'
                    value={LoginPassword}
                    onChange={(e) => {
                      setLoginPassword(e.target.value);
                      // console.log(LoginPassword);
                    }} />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleLogin}>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="Signup">
            <Card>
              <CardHeader>
                <CardTitle>Sign up</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="signupName">Name</Label>
                  <Input
                    id="signupName"
                    type="text"
                    placeholder='abc'
                    value={SignupName}
                    onChange={(e) => {
                      setSignupName(e.target.value);
                      // console.log(SignupName);
                    }} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signupEmail">Email</Label>
                  <Input
                    id="signupEmail"
                    type="text"
                    placeholder='abc@xyz.com'
                    value={SignupEmail}
                    onChange={(e) => {
                      setSignupEmail(e.target.value);
                      // console.log(SignupEmail);
                    }} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signupPassword">Password</Label>
                  <Input
                    id="signupPassword"
                    type="password"
                    placeholder='12345678'
                    value={SignupPassword}
                    onChange={(e) => {
                      setSignupPassword(e.target.value);
                      // console.log(SignupPassword);
                    }} />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleSignup}>Sign up</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>


    </>
  )
}

export default Signup