import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function CvImageAdd() {
    let { id } = useParams();

    let candidateService = new CandidateService();
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        candidateService.getAllByCandidateId(id).then(result => setCandidates(result.data.data));
    }, []);

    return (
        <div>
            
        </div>
    )
}
