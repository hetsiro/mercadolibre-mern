import { Box } from '@mui/material'
import { ItemsSearched } from './ItemsSearched'
import { Results } from './Results'
import { PaginationSearch } from './Pagination'

export const MainSearch = () => {
    return (
        <Box
            component='section'
            width='100%'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2
            }}>
            <Results />
            <ItemsSearched />
            <PaginationSearch />
        </Box>
    )
}
