
import React, {Component} from 'react'

// const ErrorBoundary=()=>
// {

// }

class ErrorBoundary extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
componentDidCatch(error,info)
{
    // console.log(hiiii)
    this.setState({hasError: true})
}
    render()
    {
        if(this.state.hasError)
            return <h1>Oops error is there</h1>
        // else
        // {
            return this.props.children
        // }     
    }
}

export default ErrorBoundary;