import { Input } from "@/components/ui/input";
import React from "react";

export default function Login(){
    <div>
        <form>
            <div>
                <label htmlFor="">Email</label>
                <Input type="email" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <Input type="password" placeholder="Password" />
            </div>
        </form>
    </div>
}