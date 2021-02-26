import * as React from 'react';
import CreatePasswordField from "@src/components/Input/CreatePasswordField";
import ConfirmedPasswordField from "@src/components/Input/ConfirmedPasswordField";
import BaseField from "@src/components/Input/BaseField";
import PasswordField from "@src/components/Input/PasswordField";
import SwitchField from "@src/components/Input/SwitchField";
import SelectField from "@src/components/Input/SelectField";


export function CustomInput(props: any) {
    return <div style={{margin: '50px'}}>
        <div>
            <PasswordField label={'classique password'} name={'classique'} />
        </div>
        <div>
            <CreatePasswordField label={'mon password'} helper={'au moins 8 charactère'} error={true} name={'passwor'} />
        </div>
        <div>
            <ConfirmedPasswordField label={'mon mot de passe'} name={'new password'} />
        </div>
        <div>
            <BaseField type={'text'} label={'input text'} name={'text'} />
        </div>
        <div style={{marginTop: '50px'}}>
            <SwitchField name='switch'
                         checked
                         error
                         helper="petite aide"
                         inputValues={{
                checked: 'Checked',
                unchecked: 'unChecked'
            }} />
        </div>
        <div style={{marginTop: '50px'}}>
            <SelectField label={"select"} type={"text"} name='switch' helper="petite aide"/>
        </div>
    </div>
}