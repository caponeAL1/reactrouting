import Home from "./Home"

function ContactUs()
{
    return(<div>
        <form>
            First name<input type="text"/><br/>
            Last name<input type="text"/><br/>
            Address<textarea rows="10" cols="50"/>
            <input type="submit" value="Save"/>
        </form>
    </div>)
}
export default ContactUs;