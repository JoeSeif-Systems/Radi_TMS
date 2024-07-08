"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Form, InputGroup } from "react-bootstrap";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='container'>
       <Form>
        <InputGroup className="p-2 mb-3">
          <input type="text" name="username" placeholder="System username"/>
        </InputGroup>
        <InputGroup className="p-2 mb-3">
          <input type="password" name="password"/>
        </InputGroup>
       </Form>
      </div>
    </main>
  );
}
