/* eslint-disable @typescript-eslint/no-explicit-any */
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'

const initialValues: {[key: string]: any} = {}
const requiredFields: {[key: string]: any} = {}

for(const input of formJson) {
    initialValues[input.name] = input.value;

    if(!input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if(rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        
        if(rule.type === 'minLength'){
            schema = schema.min((rule as any).value || 2, `Minimo de ${(rule as any).value || 2} carateres`)
        }

        if(rule.type === 'email'){
            schema = schema.email(`Revise el formato del email`)
        }



        requiredFields[input.name] = schema;
    }
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                console.log(values)
                }}
            >
                {
                    (formik) => (
                        <Form>
                        {formJson.map(({type, name, placeholder, label, options}) => {
                            if( type === 'input' || type === 'password' || type === 'email') {
                            return <MyTextInput 
                                key={name} 
                                type={(type as any)}
                                name={name}
                                label={label} 
                                placeholder={placeholder}
                                
                                />
                            } else if (type === 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        label={label}
                                        name={name}
                                        
                                    >
                                        <option value="">Select on option</option>
                                        {
                                            options?.map(({id, label}) => (
                                                <option 
                                                    key={id} 
                                                    value={id}>
                                                        {label}
                                                    </option>
                                            ))
                                        }
                                    </MySelect>
                                )
                                    
                            }

                            throw new Error(`El type ${type} no es soportado`)
                        })}


                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

