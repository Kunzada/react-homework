// Задание 1.
// В качестве практики давайте сначала сделаем приложение по
// вычислению квадратных уравнений. После создании можно понять, как много логику у нас появляется.
import React, { useState } from 'react';

const Task1 = () => {
    const [a,setA]=useState('');
    const [b,setB]=useState('');
    const [c,setC]=useState('');
    const [result,setResult]=useState('');

    const solveEquation=()=>{
        const coefficientA=parseFloat(a);
        const coefficientB=parseFloat(b);
        const coefficientC=parseFloat(c); 

        const discriminant=(coefficientB**2)-(4*coefficientA*coefficientC);
        if (discriminant > 0) {
            const root1 = (-coefficientB + Math.sqrt(discriminant)) / (2*coefficientA);
            const root2 = (-coefficientB - Math.sqrt(discriminant)) / (2*coefficientA);
            setResult(`Корни уравнения: ${root1} и ${root2}`);
          } else if (discriminant === 0) {
            const root = -coefficientB / (2*coefficientA);
            setResult(`Уравнение имеет один корень: ${root}`);
          } else {
            setResult('Корней нет');
          }

    }
    return (
        <div>
           <h1> Вычисление квадратных уравнений</h1>
           <label>
            Введите коэффициент а:
            <input type="text" value={a} onChange={(e)=>setA(e.target.value)} />
           </label>
           <br />
           <label>
           Введите коэффициент b:
            <input type="text" value={b} onChange={(e)=>setB(e.target.value)} />
           </label>
           <br />
           <label>
           Введите коэффициент c:
            <input type="text" value={c} onChange={(e)=>setC(e.target.value)} />
           </label>
           <br />
            <button onClick={solveEquation}>Решить уравнение</button>
            <br />
          <div>{result}</div>
         
        </div>
    );
}

export default Task1;
