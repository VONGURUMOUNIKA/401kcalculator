import React, {useState} from 'react';


const Calculator = () => {

    const [annualIncome, setAnnualIncome] = useState('');
    const [age, setAge] = useState('');
    const [contribution, setContribution] = useState('');
    const [employerMatch, setEmployerMatch] = useState('');
    const [salaryLimit, setSalaryLimit] = useState('');
    const [retirementage, setRetirementage] = useState('');
    const [result, setResult] = useState('');
    const [employeeResult, setEmployeeResult] = useState('');
    const [employerResult, setEmployerResult] = useState('');
    // const [totalContributionOverAge, setTotalContributionOverAge] = useState(0);

    const handleAnnualIncome = (e) => {
        setAnnualIncome(e.target.value);
    };

    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const handleContribution = (e) => {
        setContribution(e.target.value);
    };

    const handleEmployerMatch = (e) => {
        setEmployerMatch(e.target.value);
    }

    const handleSalaryLimit = (e) => {
        setSalaryLimit(e.target.value);
    }

    const handleRetirementage = (e) => {
        setRetirementage(e.target.value);
    };

    const handleResult = (e) => {
        setResult(e);
    };

    const handleEmployeeResult = (e) => {
        setEmployeeResult(e);
    };

    const handleEmployerResult = (e) => {
        setEmployerResult(e);
    };

    const handleBtn = (e) => {
       e.preventDefault();
      
       const EmployeeContribution = parseInt(parseInt(annualIncome * (contribution / 100)))
       
       const TotalEmployeeContributionOverAge = EmployeeContribution * (retirementage - age) ;
       //setEmployeeContributionOverAge(TotalEmployeeContributionOverAge);


       const TotalMatchLimit = parseInt((salaryLimit / 100) * (annualIncome * 12));
       
       const TotalEmployerMatch = parseInt((employerMatch / 100) * EmployeeContribution)
       
       const EmployerContribution = () => {
           if (TotalMatchLimit < TotalEmployerMatch) {
                return TotalMatchLimit;
           } 
           else if (TotalMatchLimit > TotalEmployerMatch)  {
              return TotalEmployerMatch;
           }
       }

       const TotalEmployerContributionOverAge = EmployerContribution() * (retirementage - age)
       

       const TotalContribution = TotalEmployeeContributionOverAge + TotalEmployerContributionOverAge;
       
       const TotalContributionOverAge = ((retirementage - age) * TotalContribution);
       

       console.log("Total Eomployee Contribution : " +TotalEmployeeContributionOverAge);
       
      console.log("Total Eomployer Contribution : "+ TotalEmployerContributionOverAge);

       console.log("Total Contribution" + TotalContributionOverAge);

       handleResult(TotalContributionOverAge);

       handleEmployeeResult(TotalEmployeeContributionOverAge);
       
       handleEmployerResult(TotalEmployerContributionOverAge);
     }


    return (
        <section>
        <div className='container'>
         <h1 className='header'>401K Calculator</h1>
        </div>
        <br></br>
        <br></br>
        <div  className='calbox'>
          <div className='left'>
            <h2>401k Retirement Calculator</h2>
            <form>
           <div className="mb-3">
           <label htmlFor="exampleInputIncome" className="form-label" >Annual Salary</label>
           <input 
           type="number" 
           className="form-control" 
           id="exampleInputIncome" 
           aria-describedby="salaryHelp"
           value = {annualIncome} 
           onChange={handleAnnualIncome}
           placeholder="Enter your annual salary (in $)"/>
           
           </div>
           <div className="mb-3">
           <label htmlFor="exampleInputAge" className="form-label">Age</label>
           <input 
           type="number" 
           className="form-control" 
           id="exampleInputAge" 
           value = {age}
           onChange={handleAge}
           placeholder="Enter how many years old?"/>
        </div>
        <div className="mb-3">
           <label htmlFor="exampleInputRetirementAge" className="form-label">Retirement age</label>
           <input 
           type="number" 
           className="form-control" 
           id="exampleInputRetirementAge" 
           value = {retirementage}
           onChange={handleRetirementage}
           placeholder="enter in number?"/>
        </div>
        <div className="mb-3">
           <label htmlFor="exampleInputContribute" className="form-label">Each Month Contribution</label>
           <input 
           type="number" 
           min="1"
           max="100"
           className="form-control" 
           id="myPercent" 
           value = {contribution }
           onChange={handleContribution}
           placeholder="Enter in percentage?"/>
        </div>
        <div className="mb-3">
           <label htmlFor="employerMatch" className="form-label">Employer Match</label>
           <input 
           type="number" 
           min="1"
           max="100"
           className="form-control" 
           id="myPercent" 
           value = {employerMatch}
           onChange={handleEmployerMatch}
           placeholder="Enter in percentage?"/>
        </div>
        <div className="mb-3">
           <label htmlFor="salaryLimit" className="form-label">Salary limit for Employer match </label>
           <input 
           type="number" 
           min="1"
           max="100"
           className="form-control" 
           id="myPercent" 
           value = {salaryLimit}
           onChange={handleSalaryLimit}
           placeholder="Enter in percentage?"/>
        </div>
       
        <button 
        type="submit" 
        className="btn btn-primary"
        onClick={handleBtn}
        >Calculate</button>
            </form>
          </div>
          <div className='right'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='Result'>
                
                <div>
                <h2>Your Estimated Retirement</h2>
                <div className='output'>
                    <p>Total Retirement Contribution : {result}</p>
                    <br></br>
                    <p>Employee Contribution :  {employeeResult}</p>
                    <br></br>
                    <p>Employer Contribution :  {employerResult}</p>
                </div>
                </div>
            </div>
          </div>
        </div>

        </section>
    )
   
  };
  
  export default Calculator;