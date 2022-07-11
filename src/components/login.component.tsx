import { Button, Card, Label, TextInput } from 'flowbite-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class LoginComponent extends Component {
    static propTypes = {}

    render() {
        return (
            <div className='w-fill md:w-1/2'>
                <p className=' text-center font-bold py-5 text-2xl'>Login to your account</p>
                <Card>
                    <form>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email1"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email1"
                                type="email"
                                placeholder="email@email.com"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password1"
                                type="password"
                                required={true}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <No Display Name id="remember" /> */}
                            <Label htmlFor="remember">
                                Remember me
                            </Label>
                        </div>
                        <Button type="submit">
                            Submit
                        </Button>
                    </form>
                </Card>
            </div>
        )
    }
}
