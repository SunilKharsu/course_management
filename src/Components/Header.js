import { Card, CardBody } from "reactstrap";

function Header(){
    return(
        <div className="text-center">
            <Card color="info" className="p-3 mt-2">
                <CardBody>
                    <h1 className="text-white">Courses Application</h1>
                    <p className="text-white">Manage courses easily and efficiently with our application, built with a powerful Spring Boot backend and a dynamic React.js frontend for a seamless experience.</p>
                </CardBody>
            </Card>
           
        </div>
    )
}

export default Header;