'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Clock, FileText, Lock, Search, Shield, Users } from 'lucide-react'

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">GovChain Dashboard</h1>
        <p className="text-gray-400">Secure Blockchain Solution for Government Records</p>
      </header>

      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search records..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-gray-800 text-white border-gray-700"
        />
      </div>

      <Tabs defaultValue="records" className="space-y-4">
        <TabsList className="bg-gray-800">
          <TabsTrigger value="records">Records</TabsTrigger>
          <TabsTrigger value="access">Access Control</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
          <TabsTrigger value="automation">Process Automation</TabsTrigger>
        </TabsList>

        <TabsContent value="records">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Government Records</CardTitle>
              <CardDescription>View and manage secure government records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center space-x-4">
                  <FileText className="text-blue-400" />
                  <div>
                    <p className="text-sm font-medium">Property Records</p>
                    <p className="text-xs text-gray-400">Last updated: 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="text-green-400" />
                  <div>
                    <p className="text-sm font-medium">Civil Registry</p>
                    <p className="text-xs text-gray-400">Last updated: 1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="access">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Access Control</CardTitle>
              <CardDescription>Manage permissions for data access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Lock className="text-yellow-400" />
                    <p className="text-sm font-medium">Healthcare Worker Access</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Lock className="text-yellow-400" />
                    <p className="text-sm font-medium">Tax Officer Access</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Audit Trail</CardTitle>
              <CardDescription>Track all actions on the blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Search className="text-purple-400" />
                  <div>
                    <p className="text-sm font-medium">Record Viewed</p>
                    <p className="text-xs text-gray-400">User ID: 12345 | Timestamp: 2023-10-15 14:30:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Shield className="text-red-400" />
                  <div>
                    <p className="text-sm font-medium">Access Denied</p>
                    <p className="text-xs text-gray-400">User ID: 67890 | Timestamp: 2023-10-15 15:45:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Process Automation</CardTitle>
              <CardDescription>Automated government processes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Clock className="text-cyan-400" />
                    <div>
                      <p className="text-sm font-medium">Document Approval</p>
                      <p className="text-xs text-gray-400">Status: In Progress</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <BarChart className="text-orange-400" />
                    <div>
                      <p className="text-sm font-medium">Record Verification</p>
                      <p className="text-xs text-gray-400">Status: Completed</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}