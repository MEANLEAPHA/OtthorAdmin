import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge,faSliders, faFlag, faCommentDots, faBug, faUser, faBook, faNewspaper, faUsers, faComments, faComment, faBell} from "@fortawesome/free-solid-svg-icons";
import "../css/Aside.css";
const Aside = () =>{
    return(
       
                <SmallAside />
           
    )
}



const MaxAside = () => {
    return(
        <aside className="MaxAside">
            <menu className="MaxMenu">
                <AppendMain />
                <AppendReportAndFeedback />
                <AppendUserInsight />
                <AppendBroadcast />
            </menu>
        </aside>
    )
}

const SmallAside = () => {
    return(
        <aside className="minAside">
            <menu className="minMenu">
               <AppendMinAside />
            </menu>
        </aside>
    )
}

const MinInfo = [
    {
        id:1, a: '#', icon: faGauge, classNameIcon: 'icon-aside'
    },
    {
        id:2, a: '#', icon: faSliders, classNameIcon: 'icon-aside'
    },
    {
        id:3, a: '#', icon: faBug,  classNameIcon: 'icon-aside'
    },
    {
        id:4, a: '#', icon: faCommentDots, classNameIcon: 'icon-aside'
    },
    {
        id:5, a: '#', icon: faFlag, classNameIcon: 'icon-aside'
    },
    {
        id:6, a: '#', icon: faBug, classNameIcon: 'icon-aside'
    },
    {
        id:7, a: '#', icon: faUser, label: 'User', classNameIcon: 'icon-aside'
    },
    {
        id:8, a: '#', icon: faUsers, classNameIcon: 'icon-aside'
    },
    {
        id:9, a: '#', icon: faBook, classNameIcon: 'icon-aside'
    },
    {
        id:10, a: '#', icon: faComment, classNameIcon: 'icon-aside'
    },
    {
        id:11, a: '#', icon: faComments, classNameIcon: 'icon-aside'
    },
    {
        id:12, a: '#', icon: faBell, classNameIcon: 'icon-aside'
    },
    {
        id:13, a: '#', icon: faNewspaper, classNameIcon: 'icon-aside'
    }
]
const MinCard = ({a, icon, classNameIcon}) => {
    return(
        <a href={a}>
            <li><FontAwesomeIcon icon={icon} className={classNameIcon}/> </li>
        </a>
    )
}

const AppendMinAside = () =>{
    return(
        MinInfo.map(item => (
            <MinAside key={item.id} {...item} />
        ))
    )
};
const MinAside = ({a, icon, classNameIcon})=> {
    return(
           <MinCard a={a} icon={icon} classNameIcon={classNameIcon}/>
    )
};



const Card = ({a, icon, label, classNameIcon}) =>{
    return(
       <a href={a}>
                    <li>
                        <div>
                            <FontAwesomeIcon icon={icon} className={classNameIcon}/> 
                        </div>
                        <div>
                            {label}
                        </div>
                    </li>
          </a>
    )
};

const Mains= [
    {
        id:1, a: '#', icon: faGauge, label: 'Dashboard', classNameIcon: 'icon-aside'
    },
    {
        id:2, a: '#', icon: faSliders, label: 'Maintenance', classNameIcon: 'icon-aside'
    },
    {
        id:3, a: '#', icon: faBug, label: 'Error', classNameIcon: 'icon-aside'
    }
];
const AppendMain = () =>{
    return(
        Mains.map(item => (
            <Main key={item.id} {...item} />
        ))
    )
};
const Main = ({a, icon, label, classNameIcon})=> {
    return(
           <Card a={a} icon={icon} label={label} classNameIcon={classNameIcon}/>
    )
};

const ReportAndFeedbacks= [
    {
        id:1, a: '#', icon: faCommentDots, label: 'Feedback', classNameIcon: 'icon-aside'
    },
    {
        id:2, a: '#', icon: faFlag, label: 'Report', classNameIcon: 'icon-aside'
    },
    {
        id:3, a: '#', icon: faBug, label: 'Error', classNameIcon: 'icon-aside'
    }
];

const AppendReportAndFeedback = () =>{
    return(
        <>
        <label>Reports & Feedback </label>
        {ReportAndFeedbacks.map(item => (
            <ReportAndFeedback key={item.id} {...item} />
        ))}
        </>
    )
};

const ReportAndFeedback = ({a, icon, label, classNameIcon})=> {
    return(
          <Card a={a} icon={icon} label={label} classNameIcon={classNameIcon} />
    )
};

const UserInsights= [
    {
        id:1, a: '#', icon: faUser, label: 'User', classNameIcon: 'icon-aside'
    },
    {
        id:2, a: '#', icon: faUsers, label: 'Community', classNameIcon: 'icon-aside'
    },
    {
        id:3, a: '#', icon: faBook, label: 'Book', classNameIcon: 'icon-aside'
    },
    {
        id:4, a: '#', icon: faComment, label: 'Comment', classNameIcon: 'icon-aside'
    },
    {
        id:5, a: '#', icon: faComments, label: 'Reply', classNameIcon: 'icon-aside'
    }
];

const AppendUserInsight = () =>{
    return(
        <>
        <label>User Insight</label>
        {UserInsights.map(item => (
            <UserInsight key={item.id} {...item} />
        ))}
        </>
    )
};

const UserInsight = ({a, icon, label, classNameIcon})=> {
    return(
          <Card a={a} icon={icon} label={label} classNameIcon={classNameIcon} />
    )
};


const Broadcasts= [
    {
        id:1, a: '#', icon: faBell, label: 'Notification', classNameIcon: 'icon-aside'
    },
    {
        id:2, a: '#', icon: faNewspaper, label: 'Article', classNameIcon: 'icon-aside'
    }
];

const AppendBroadcast = () =>{
    return(
        <>
        <label>Broadcast</label>
        {Broadcasts.map(item => (
            <Broadcast key={item.id} {...item} />
        ))}
        </>
    )
};

const Broadcast = ({a, icon, label, classNameIcon})=> {
    return(
          <Card a={a} icon={icon} label={label} classNameIcon={classNameIcon} />
    )
};


export default Aside;