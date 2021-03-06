import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';



export default function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([{
        week_day: '',
        from: '',
        to: ''
    }])
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    const history = useHistory();
    function addNewScheduleForm() {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: '',
                from: '',
                to: ''
            }])
    }

    function handleCreateClass(e:FormEvent) {
        e.preventDefault();
        
        api.post('classes', {name, avatar, whatsapp, bio, subject, cost:Number(cost), schedule:scheduleItems}).then(()=>{alert('Cadastro realizado com sucesso!'); history.push('/')}).catch(()=>{alert('Erro no cadastro.')})
    }

    function setScheduleItemValue(position: number, field:string, value:string){
        const newArray = scheduleItems.map((scheduleItem, index)=>{
            if(index === position){
                return {
                    ...scheduleItem, [field]:value
                };
                
            }
            else {
                return scheduleItem;
            }
        })
        setScheduleItems(newArray);
    }

    return (
        <div className="container" id="page-teacher-form">
            <PageHeader title="Que incrível que você quer dar aulas!" description="O primeiro passo é preencher esse formulário de inscrição" />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name" label="Nome Completo" value={name} onChange={(e) => setName(e.target.value)} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
                        <Input name="whatsapp" label="WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                        <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => setBio(e.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select name="subject" label="Matéria"
                            value={subject} onChange={(e) => setSubject(e.target.value)}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'História', label: 'História' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Programação', label: 'Programação' },
                            ]}
                        />
                        <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={(e) => setCost(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="button" onClick={addNewScheduleForm} >
                                + Novo horário
                        </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={index} className="schedule-item">
                                    <Select name="subject" label="Matéria"
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-Feira' },
                                            { value: '2', label: 'Terça-Feira' },
                                            { value: '3', label: 'Quarta-Feira' },
                                            { value: '4', label: 'Quinta-Feira' },
                                            { value: '5', label: 'Sexta-Feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                        value={scheduleItem.week_day}
                                        onChange={e =>setScheduleItemValue(index, 'week_day', e.target.value)}
                                    />
                                    <Input name="from" label="Das" value={scheduleItem.from} type="time" onChange={e =>setScheduleItemValue(index, 'from', e.target.value)} />
                                    <Input name="to" label="Até" value={scheduleItem.to} type="time" onChange={e =>setScheduleItemValue(index, 'to', e.target.value)} />
                                </div>
                            )
                        })}

                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>

            </main>
        </div>
    )
}