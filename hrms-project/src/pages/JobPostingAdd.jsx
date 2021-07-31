import { useState } from "react";
import React from "react";
import *as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, FormField, FormGroup, Dropdown, Label, Input } from "semantic-ui-react";
import JobPostingService from "../services/jobPostingService";
import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";
import HrmsSelect from "../utilities/customFormControls/HrmsSelect";
import { useEffect } from "react";
import typeOfWorkingService from "../services/typeOfWorkingService";
import timeOfWorkingService from "../services/timeOfWorkingService";


export default function JobPostingAdd() {

    // const [cities, setCities] = useState([])
    const [workTypes, setWorkingTypes] = useState([]);
    const [workTimes, setWorkTime] = useState([]);
    useEffect(() => {
        const workingTypeService = new typeOfWorkingService();
        const workingTimeService = new timeOfWorkingService();
        workingTypeService.getTypesOfWorking().then((result) => setWorkingTypes(result.data.data))
        workingTimeService.getTimesOfWorking().then((result) => setWorkTime(result.data.data))
    }, [])


    const handleOnChange = (prop, value, fieldName) => {
        prop.setFieldValue(fieldName, value);
    };

    let workingTypesOptions = workTypes.map((workingType, index) => ({
        key: index,
        text: workingType.name,
        value: workingType.id,
    }));

    let workingTimeOption = workTimes.map((workTime, index) => ({
        key: index,
        text: workTime.name,
        value: workTime.id,
    }));


    const initialValues = {
        jobDefinition: "",
        minSalary: "100",
        maxSalary: "",
        applicationDeadline: "",
        countOpenPosition: "",
        // jobtitle_id: "",
        // city_id: "",
        // employer_id: ""
    };

    const schema = Yup.object({
        jobDefinition: Yup.string().required("İş tanımı boş bırakılamaz!"),
        minSalary: Yup.number().required("Minimum maaş alanı boş bırakılamaz!"),
        maxSalary: Yup.number().required("Maksimum maaş alanı boş bırakılamaz!"),
        applicationDeadline: Yup.date().required("Son başvuru tarihi boş bırakılamaz!"),
        countOpenPosition: Yup.number().required("Açık pozisyon sayısı boş bırakılamaz!"),
        // jobtitle_id: Yup.string().required("İş pozisyonu boş bırakılamaz!"),
        // city_id: Yup.number().required("Şehir boş bırakılamaz!"),

    });

    const onSubmit = values => {
        let jobPostingService = new JobPostingService();
        let data = {
            jobDefinition: values.jobDefinition,
            minSalary: values.minSalary,
            maxSalary: values.maxSalary,
            applicationDeadline: values.applicationDeadline,
            countOpenPosition: values.countOpenPosition
        }
        jobPostingService.addJobPosting(data);
        console.log(data)
    };

    // const options=[
    //    {key:'u',text:"Uzaktan Çalışma",value:"uzaktan çalışma"},
    //    {key:'y', text:"Yerinde Çalışma",value:"yerinde çalışma"},

    // ]



    return (

        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}
        >
            {(formikprops) => (
                <Form className="ui form" onSubmit={formikprops.handleSubmit}>
                    <HrmsTextInput name="jobDefinition" placeholder="İş Tanımı" />
                    {/* <FormField>
                        <Field name="jobDefinition" placeholder="İş Tanımı"></Field>
                        <ErrorMessage name="jobDefinition" render={error=>
                            <Label pointing basic color="red" content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <HrmsTextInput name="minSalary" placeholder="Minimum Maaş" />
                    <HrmsTextInput name="maxSalary" placeholder="Maximum Maaş" />
                    <HrmsTextInput name="applicationDeadline" placeholder="Son Başvuru Tarihi" />
                    <HrmsTextInput name="countOpenPosition" placeholder="Açık Pozisyon Sayısı" />
                    {/* <HrmsSelect name="workingTime" placeholder="Çalışma Türünü Seçiniz" options={workingTypesOptions}/> */}

                    {/* <FormGroup widths="equal">
                 <FormField>                                
                   <Dropdown
                    selection
                    clearable
                    name="workTimeId"
                    placeholder="Çalışma Zamanı Seçiniz"
                    onChange={(event, data) =>
                      handleOnChange(formikprops, data.value, "workTimeId")}                    
                    onBlur={formikprops.onBlur}
                    value={formikprops.values.workTimeId}
                    options={workingTimeOption}
                  />
                  {formikprops.errors.workTimeId && formikprops.touched.workTimeId && (
                      <div className={"ui pointing red basic label"}>
                        {formikprops.errors.workTimeId}
                      </div>
                    )}
                  </FormField> */}
                   <FormGroup widths="equal">
                    <FormField control={Input} required width={6} label="Çalışma Türünü Seçiniz">
                        <Field name="workType" as="select">
                            <option value="office">Ofiste Çalışma</option>
                            <option value="remote">İş Yerinde Çalışma</option>
                        </Field>
                        <ErrorMessage
                            name="workType"
                            render={(error) => (
                                <Label
                                    icon="ban fitted"
                                    pointing="left"
                                    basic
                                    color="red"
                                    content={error}
                                ></Label>
                            )}
                        ></ErrorMessage>
                    </FormField>
                    <FormField required control={Input} width={6} label="Çalışma Zamanını Seçiniz">
                        <Field name="workTime" as="select">
                            <option value="part time">Yarı Zamanlı</option>
                            <option value="full time">Tam Zamanlı</option>
                        </Field>
                    </FormField>
                    </FormGroup>
                    {/* <FormField>
                  <Dropdown
                    selection
                    clearable
                    name="workingTypeId"
                    placeholder="Çalışma Türünü Seçiniz"
                    onChange={(event, data) =>
                      handleOnChange(formikprops, data.value, "workingTypeId")}
                    onBlur={formikprops.onBlur}
                    value={formikprops.values.workingTypeId}
                    options={workingTypesOptions}
                  />
                  {formikprops.errors.workPlaceId && formikprops.touched.workPlaceId && (
                      <div className={"ui pointing red basic label"}>
                        {formikprops.errors.workPlaceId}
                      </div>
                    )}
                  </FormField>
                </FormGroup> */}



                    {/* <FormField>
                        <Field name="minSalary" placeholder="Minimum Maaş"></Field>
                    </FormField> */}
                    {/* <FormField>
                        <Field name="maxSalary" placeholder="Maximum Maaş"></Field>
                    </FormField> */}
                    {/* <FormField>
                        <Field name="applicationDeadline" placeholder="Son Başvuru Tarihi"></Field>
                    </FormField> */}
                    {/* <FormField>
                        <Field name="countOpenPosition" placeholder="Açık Pozisyon Sayısı"></Field>
                    </FormField> */}

                    <Button color="instagram" type="submit">İş İlanı Ekle</Button>
                </Form>
            )}
        </Formik>



    )


}















