# -*- coding: utf-8 -*-

# In MongoDB instead of Tables we call them as COLLECTIONS

# IMPORT the installed PYMONGO package
import pymongo  # To interact with db, collections etc

# Create MongoDB Client
client = pymongo.MongoClient('mongodb://127.0.0.1:27017/')  
# By default whenever we are running MongoDB on local server the IP address is '127.0.0.1 and the PORT is 27017
# we also need to give the protocaol i.e mongodb


# Create a Database 'Employee' and store it in mybd variable
mydb = client['Employee']

# Until and unless we will not create/add collections in any new databases, it will not show up in Cilent Side i.e mongodb compass interface


# Start Create One Collection
information = mydb.employeeinformation


# Start Creating One Records
# All the records that are stored in the collections in the form of JSON documents
# So, we need to make JSON type in the form of KEY:VALUE pairs
record = {
            'firstname':'Sid',
            'lastname':'Das',
            'Department':'Data-Science'
         }


# Insert the above record in the collection named 'employeeinformation'
# Using the above Document information
information.insert_one(record)



# To insert multiple Records at once
# We need to pass multile list arrays
record = [{
            'firstname':'Sid',
            'lastname':'Das',
            'Department':'Data-Science'
          },{
             'firstname':'Sid1',
             'lastname':'Das1',
             'Department':'Data-Science1'
          },{
            'firstname':'Sid2',
            'lastname':'Das2',
            'Department':'Data-Science2'
          }]
              
# We need to use 'insert_many()' function to insert all the above records
information.insert_many(record)
