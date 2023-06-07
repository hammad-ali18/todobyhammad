// we have already define the structure to the database but also we have to define the structure to this  drizzleORM
import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core"; // types in database
import { drizzle } from "drizzle-orm/vercel-postgres";

//types
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const todoTable = pgTable("todo",{
  id:serial('id').primaryKey(),
  task: varchar("task",{length :255}).notNull()  //.default("abc")
})

// this infermodel is setting type-todoTable of Todo
                            //generics
export type Todo = InferModel<typeof todoTable> // this type for getting data or selecting

export type newTodo = InferModel<typeof todoTable, 'insert'> //this type is for inserting data

export const db = drizzle(sql)