'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Home, Clock, Shield, Edit } from "lucide-react"

export default function UserProfile() {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    id: "123456789",
    avatar: "/placeholder.svg?height=100&width=100"
  })

  const [properties] = useState([
    { id: "PROP001", address: "123 Main St, Anytown, AT 12345", type: "Residential" },
    { id: "PROP002", address: "456 Oak Ave, Somewhere, SW 67890", type: "Commercial" }
  ])

  const [accessLog] = useState([
    { id: 1, accessor: "Tax Department", timestamp: "2023-10-15 14:30:00", purpose: "Annual Tax Assessment" },
    { id: 2, accessor: "City Planning", timestamp: "2023-10-10 09:15:00", purpose: "Zoning Verification" },
    { id: 3, accessor: "Police Department", timestamp: "2023-10-05 11:45:00", purpose: "Routine Check" }
  ])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">User Profile</h1>
      </header>

      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-200 mb-4">{user.email}</p>
            <p className="text-gray-200">ID: {user.id}</p>
            <Button className="mt-4" variant="outline">
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="properties">
          <TabsList className="bg-gray-800 mb-4">
            <TabsTrigger value="properties" className="text-white data-[state=active]:text-primary">
              <Home className="mr-2 h-4 w-4" />
              Owned Properties
            </TabsTrigger>
            <TabsTrigger value="access-log" className="text-white data-[state=active]:text-primary">
              <Clock className="mr-2 h-4 w-4" />
              Access Log
            </TabsTrigger>
          </TabsList>

          <TabsContent value="properties">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Owned Properties</CardTitle>
                <CardDescription className="text-gray-200">Properties registered under your name</CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="text-white">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Property ID</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {properties.map((property) => (
                      <TableRow key={property.id}>
                        <TableCell>{property.id}</TableCell>
                        <TableCell>{property.address}</TableCell>
                        <TableCell>{property.type}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="access-log">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Access Log</CardTitle>
                <CardDescription className="text-gray-200">Recent accesses to your personal data</CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="text-white">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Accessor</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accessLog.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell>{log.accessor}</TableCell>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell>{log.purpose}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Shield className="mr-2 h-4 w-4" />
                            Review
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}