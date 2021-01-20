import Button from './Button'

const Header = ({ title }) => {

    return (
        <header>
            <h1>Task Tracker</h1>
            <Button color='green' text='Add'/>
        </header>
    )
}

export default Header
