function domainType(domains) {
    //  write code here.
    const topLevelDomainsRouter = {
        'com': 'commercial',
        'org': 'organization',
        'net': 'network',
        'info': 'information'
    }

    const types = []
    for (domain of domains) {
        const domainList = domain.split('.')
        const topLevelDomain = domainList[domainList.length - 1]
        types.push(topLevelDomainsRouter[topLevelDomain])
    }

    return types
}