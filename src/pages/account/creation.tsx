import * as React from 'react';
import AppHeader from "@src/components/home/AppHeader";
import {Layout} from "@src/pages/layout";
import {Button, Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import BaseField from "@src/components/Input/BaseField";
import ConfirmedPasswordField from "@src/components/Input/ConfirmedPasswordField";

interface AccountCreationState {
    login: string|null
    password: any
}

export class Creation extends React.Component<any, AccountCreationState>{
    constructor(props: any) {
        super(props);

        this.state = {
            login: null,
            password: null
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onSubmit(event:any) {
        console.log(this.state);
    }

    onLoginChange(event: any) {
        let value = event.target.value;
        this.setState(state => ({
            login: value
        }))
    }

    onPasswordChange(password: any) {
        this.setState(state => ({
            password: password
        }))
    }

    render() {
        return <Layout>
            <AppHeader/>
            <Grid item container xs={12}
                  direction="row"
                  justify="center"
                  alignItems="stretch">
                <Grid item xs={6}>
                    <Card className="accountCreation">
                        <CardHeader title={'Créer votre compte'}/>
                        <CardContent>
                            <form>
                                <BaseField
                                    value={this.state.login ?? ''}
                                    onChange={this.onLoginChange}
                                    label={'Login'}
                                    type={'text'}
                                    name={'login'}
                                    helper={'Renseigner votre email'}
                                    required
                                />
                                <ConfirmedPasswordField
                                    required
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}
                                    className={'account-password'}
                                    label={'Mot de passe'}
                                    name={'password'}/>
                                <Button onClick={this.onSubmit} variant={"contained"} color={"secondary"}>Créer mon compte</Button>
                            </form>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    }
}